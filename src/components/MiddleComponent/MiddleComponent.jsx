import React from 'react';
import LeftMiddleComponent from "../LeftMiddleComponent/LeftMiddleComponent.jsx";
import RightMiddleComponent from "../RightMiddleComponent/RightMiddleComponent.jsx";
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  padding: 60px 30px 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const Input = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.div`
  border: black 2px solid;
  width: 100px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    border-color: red;
  }
`;

const MiddleComponent = React.FunctionComponent = React.memo(() => {
  const [state, setState] = React.useState({
      search: '',
  })

  const onClick = React.useCallback(() => {
    console.log(state.search);
  }, [state]);

    const onSearchChange = React.useCallback((e) => {
        e.preventDefault();
        setState({
            ...state,
            search: e.target.value,
        });
    }, [state]);

    return (
        <React.Fragment>
            <Container>
                <h1> Поисковая строка </h1>
                <Input>
                    <input onChange={onSearchChange} style={{width: '100%', height: '30px'}}/>
                    <Button onClick={onClick}>{'Поиск'}</Button>
                </Input>
            </Container>
            <div className="middle">
                <LeftMiddleComponent/>
                <RightMiddleComponent/>
            </div>
        </React.Fragment>
    )
})

export default MiddleComponent;

