const Links = require("../models/Link");
const BadRequestError = require("../errors/badRequest");
const {StatusCodes} = require("http-status-codes")

const getAllLinks = async (req, res) => {
  const {userId} = req.user;
  const allLinksArr = await Links.find({createdBy: userId});

  if(!allLinksArr) {
    res.status(StatusCodes.NOT_FOUND).json({"message": "No link found"})
  }
  
  const links = allLinksArr.reduce((acc, curr) => {
    acc.push(...curr.links,);
    return acc;
  }, []);
  res.status(StatusCodes.OK).json({links})
}


const addLink = async (req, res) => {
  const {userId} = req.user;
  const links = req.body;
  
  if(!links) {
    throw new BadRequestError("please provide values")
  }
  
  const linksObj = await Links.findOne({createdBy: userId}) || [];

  if(linksObj.length < 1) {
    const newLink = await Links.create({createdBy: userId, links})
    res.status(StatusCodes.CREATED).json(newLink);
  } else {
    const linksIdArr = linksObj.links.map(link => link._id);
    links.forEach(async link => {
      const linkId = link._id
      if(linksIdArr.includes(linkId)) {
        const foundLink = linksObj.links.find(linkId => linkId._id === link._id);
        foundLink.link = link.link;
        foundLink.platform = link.platform;
        linksObj.links.map(link => {
          if(link._id === foundLink._id) {
            link.link = foundLink.link;
            link.platform = foundLink.platform;
            return link;
          } else {
            return link;
          }
        })
      } else {
        linksObj.links.push(link);
        
      }
      
    });
    await linksObj.save();
    res.status(StatusCodes.CREATED).json(links)
  } 
}

const deleteLink = async (req, res) => {
  const {linkId} =  req.params;
  const {userId} = req.user;

  let userLinks = await Links.findOne({createdBy: userId})
  const linkIndex = userLinks.links.findIndex(link => link._id.toString() === linkId);
  
  if(linkIndex === -1) {
    res.status(StatusCodes.NOT_FOUND).json({message: "Link not found"})
  } else {
    userLinks.links.splice(linkIndex, 1);
    await userLinks.save();
    res.status(StatusCodes.OK).json(userLinks);
  }
  
}



module.exports = {addLink, getAllLinks, deleteLink}