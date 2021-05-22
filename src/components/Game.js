import React from "react";
import {Button, Col, Container, Nav, Row} from "react-bootstrap";
import Board from "./Board";
import {calculateWinner} from '../utils/functions';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 'Перейти к ходу #' + move : 'К началу игры';
            return (
                <li key={move}>
                    <Button variant="outline-dark" size="sm" onClick={() => this.jumpTo(move)}>{desc}</Button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Выиграл ' + winner;
        } else {
            status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <Nav className="bg-dark" variant="tabs" defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <div className="game">
                                <div className="game-board">
                                    <Board
                                        squares={current.squares}
                                        onClick={(i) => this.handleClick(i)}
                                    />
                                </div>
                                <div className="game-info">
                                    <div>{status}</div>
                                    <ol>{moves}</ol>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Game;