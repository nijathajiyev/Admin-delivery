import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarDiv = styled.div`
  height: 474px;
  width:256px;
  background-color: #c74feb;
  border-radius: 14px;
  margin: 16px;
  padding: 24px;
`;

export const SidebarRowsDiv = styled.div`
  display: flex;
  align-items: center;
  width: 216px;
  padding: 11px 17px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background: #cc60ed;
  }
`;

export const SidebarRowsLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: rgba(242, 242, 242, 0.87);
  margin-left: 27px;
  text-decoration: none;
  margin-bottom: 0 !important;
  &:hover {
    color: #fcddec;
  }
`;
