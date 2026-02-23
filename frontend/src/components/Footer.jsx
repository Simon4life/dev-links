import React from "react";
import styled from "styled-components";
import {FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"
const FooterWrapper = styled.footer`
  background: #ffffff;
  padding: 80px 0 40px;
  border-top: 1px solid #e2e8f0;

  @media (prefers-color-scheme: dark) {
    background: #020617;
    border-color: #0f172a;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #6366f1;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
`;

const BrandName = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: #0f172a;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

const Description = styled.p`
  font-size: 14px;
  max-width: 260px;
  line-height: 1.6;
  color: #64748b;

  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialButton = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: all 0.3s ease;

  &:hover {
    background: #6366f1;
    color: white;
  }

  @media (prefers-color-scheme: dark) {
    background: #0f172a;
    color: #94a3b8;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ColumnTitle = styled.h4`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0f172a;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.a`
  font-size: 14px;
  color: #64748b;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #6366f1;
  }

  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`;

const BottomBar = styled.div`
  padding-top: 40px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  @media (prefers-color-scheme: dark) {
    border-color: #0f172a;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #94a3b8;
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  font-size: 12px;

  @media (prefers-color-scheme: dark) {
    background: #0f172a;
    border-color: #1e293b;
    color: #94a3b8;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <BrandSection>
            <Logo>
              <LogoIcon>🔗</LogoIcon>
              <BrandName>Devlinks</BrandName>
            </Logo>
            <Description>
              Empowering developers to share their passions through one simple,
              beautiful link. Join the revolution.
            </Description>

            <SocialIcons>
              <SocialButton href="#"><FaInstagram/></SocialButton>
              <SocialButton href="#"><FaTwitter/></SocialButton>
              <SocialButton href="#"><FaYoutube/></SocialButton>
            </SocialIcons>
          </BrandSection>

          <Column>
            <ColumnTitle>Company</ColumnTitle>
            <LinkList>
              <li><FooterLink href="#">About</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
              <li><FooterLink href="#">Press</FooterLink></li>
              <li><FooterLink href="#">Blog</FooterLink></li>
            </LinkList>
          </Column>

          <Column>
            <ColumnTitle>Support</ColumnTitle>
            <LinkList>
              <li><FooterLink href="#">Help Center</FooterLink></li>
              <li><FooterLink href="#">Terms of Service</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
              <li><FooterLink href="#">Contact</FooterLink></li>
            </LinkList>
          </Column>
        </Grid>

        <BottomBar>
          <Copyright>
            © 2026 LinkShare Inc. All rights reserved.
          </Copyright>

          <LanguageSelector>
            🌐 English (US)
          </LanguageSelector>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}