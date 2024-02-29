"use server";

import { Children, ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps {
	children: ReactNode;
}


/**
 * Takes the full width of the container
 */
function CardWithDividers({ children }: CardProps) {
	const l = Children.count(children);

	return (
		<Card>
		<>
			{Children.map(children, (child, idx) => (
				<div
					className={clsx("px-2 py-4 m-2 flex flex-grow justify-center", {
						"border-r-2 border-r-gray-200": l-1 !== idx,
					})}
				>{child}</div>
			))}
			</>
		</Card>
	);
}


/**
 * Card takes the child and renders it in a bodered box,
 * It takes the full width of the container
 * takes the height of content
 * Expects only on child, errors if passed more than one
 */
function Card({ children }: CardProps) {
	const elm = Children.only(children);
	return (
		<div
			className="
			h-max px-2
			border-2 border-solid border-gray-200 rounded-xl
			flex
			"
		>
			{elm}
		</div>
	);
}


/**
 * Takes full width of the container
 */
function JoinedCards({ children }: CardProps) {
	const l = Children.count(children);
	return (
		<Card>
			<>
				{Children.map(children, (child, idx) => (
					<div
						className={clsx("p-4 flex flex-grow justify-center ", {
							"border-r-2 border-r-gray-200": idx !== l - 1,
						})}
					>
						{child}
					</div>
				))}
			</>
		</Card>
	);
}


export { JoinedCards, Card, CardWithDividers };
