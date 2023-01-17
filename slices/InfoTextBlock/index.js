import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styled from 'styled-components'

/**
 * @typedef {import("@prismicio/client").Content.InfoTextBlockSlice} InfoTextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InfoTextBlockSlice>} InfoTextBlockProps
 * @param { InfoTextBlockProps }
 */


const InfoTextBlock = ({ slice }) => (
  <StyledSectionBackground>
    <span className="title">
      {
        slice.primary.title &&
        <PrismicRichText field={slice.primary.title} />
      }
    </span>
    {
      slice.primary.description &&
      <PrismicRichText field={slice.primary.description} />
    }
  </StyledSectionBackground>
)

export default InfoTextBlock