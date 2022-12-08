import { PrismicImage, PrismicRichText } from "@prismicio/react";
import React from "react";
import styled from "styled-components";
import Button from "../../src/components/Button";
interface IProjectBlock {
  project: any;
  index:number;
}

const StyledImgContainer = styled.figure`
  width: 70%;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledArticle=styled.article`

`
export default function MobileProjectBlock(props: IProjectBlock) {
    
  return (
    <li>
      <StyledArticle>
        <StyledImgContainer>
          <StyledImg
            src={props.project.data.cover_photo.url}
            alt={props.project.data.cover_photo.alt}
          />
        </StyledImgContainer>
        <div>
            <h4>{props.project.data.name}</h4>
            <PrismicRichText field={props.project.data.description_short} />
            <Button colorType="gradientPink" >Více</Button>
        </div>
      </StyledArticle>
    </li>
  );
}
