import styled from "styled-components";

const gray = "#ccc";
const green = "#013220";
const outline = `2px solid ${gray}`;
const greenOutline = `2px solid ${green}`;

export const DonorWrapper = styled.section`
  text-align: center;
  :hover {
    cursor: pointer;
    .card {
      border-color: ${green};
    }
  }
  h3 {
    font-weight: 700;
  }
  img {
    width: 80px;
  }
  .card {
    border: ${props => (props.isSelected ? greenOutline : outline)};
  }
  .card-header {
    background: ${props => (props.isSelected ? green : null)};
    border-bottom: ${props => (props.isSelected ? greenOutline : outline)};
    color: ${props => (props.isSelected ? "#fff" : null)};
    font-weight: 700;
  }
  .card-body {
    padding: 1.25rem 0.75rem;
  }
`;
