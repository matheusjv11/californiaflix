import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: width 0.3s;

  &:hover{
    width: 350px;
    .title-div{
      opacity: 1;
      
    }
    
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoTitleDiv = styled.div`
  background: var(--black);
  width: 100%;
  height: 40px;
  margin-bottom:0;
  opacity: 0;
  padding:0;
`;

export const VideoTitle = styled.p`
  color:white;
  padding-left: 10px;
  font-size: 22px;
  margin:0;
`;
