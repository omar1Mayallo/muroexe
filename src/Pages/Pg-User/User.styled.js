import styled from "styled-components";

export const UserBlock = styled.div`
  padding: 10px;
  border: 1px solid rgba(160, 160, 160, 0.25);
`;
export const OptionsBlock = styled.aside`
  border-right: 1px solid rgba(160, 160, 160, 0.25);
`;
export const InfoBlock = styled.section`
  .info-list-item {
    display: none;
    &.active-info {
      display: block;
    }
    h3 {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
