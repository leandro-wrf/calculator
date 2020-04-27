import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, Row, Button, ButtonIcon, Text } from '../../styles/buttons'

const B0 = ['AC', 'C', '(±)']
const B1 = ['1', '2', '3', '÷']
const B2 = ['4', '5', '6', '×']
const B3 = ['7', '8', '9', '-']
const B4 = ['.', '0', '=', '+']

export default function Buttons({ handleModules }) {
	return (
		<Container>
			<Row>
				{B0.map((button) => (
					<Button key={button.toString()} onPress={() => handleModules(button)}>
						<Text>{button}</Text>
					</Button>
				))}

				<ButtonIcon onPress={() => handleModules('X')}>
					<Feather name="delete" size={45} color="#fff" />
				</ButtonIcon>
			</Row>

			<Row>
				{B1.map((button) => (
					<Button key={button.toString()} onPress={() => handleModules(button)}>
						<Text>{button}</Text>
					</Button>
				))}
			</Row>

			<Row>
				{B2.map((button) => (
					<Button key={button.toString()} onPress={() => handleModules(button)}>
						<Text>{button}</Text>
					</Button>
				))}
			</Row>

			<Row>
				{B3.map((button) => (
					<Button key={button.toString()} onPress={() => handleModules(button)}>
						<Text>{button}</Text>
					</Button>
				))}
			</Row>

			<Row>
				{B4.map((button) => (
					<Button key={button.toString()} onPress={() => handleModules(button)}>
						<Text>{button}</Text>
					</Button>
				))}
			</Row>
		</Container>
	)
}
