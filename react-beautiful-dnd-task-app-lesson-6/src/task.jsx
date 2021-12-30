import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? '#F5F7FF' : 'white')};
  display: flex;
  flex-direction: row;
`;

const Textdiv = styled.div`
  width: 300px;
  height: 20px;
  padding-top: 17px;
  padding-left: 50px;
`;

const ImageMenu = styled.img`
  width: 20px;
  height: 25px;
  padding-top: 15px;
  padding-right: 100px;
  padding-left: 10px;
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <ImageMenu src={require('./image/icon-menu.png')} />
            <img src={require('./image/Dirty-Milk-Tea.png')} />
            <Textdiv>{this.props.task.content}</Textdiv>
          </Container>
        )}
      </Draggable>
    );
  }
}
