import React from "react";
import styled from "styled-components";

const StyledEntry = styled.div`
  img {
    width: 100%;
  }
  p {
    font-size: 1.15rem;
    margin-bottom: 1rem;
  }
  li {
    font-size: 1.15rem;
    margin: 1rem 0;
  }
`;

const BlogPostEntry = ({ children }) => {
  return <StyledEntry>{children}</StyledEntry>;
};

export default BlogPostEntry;
