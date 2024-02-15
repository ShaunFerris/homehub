"use client";

import { Dispatch, SetStateAction, useState } from "react";

type ColumnTypes = "backlog" | "todo" | "active" | "done";

interface ColumnProps {
  title: string;
  headingColor: string;
  column: ColumnTypes;
  cards: any[];
  setCards: Dispatch<SetStateAction<any[]>>;
}

const KanbanBoard = () => {
  return (
    <div className="h-screen w-full bg-neutral-100/0 text-neutral-900">
      <Board />
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState(TEST_CARDS);
  return (
    <div className="flex h-full w-full justify-center gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        headingColor="text-neutral-500"
        column="backlog"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        headingColor="text-yellow-500"
        column="todo"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        headingColor="text-red-500"
        column="active"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        headingColor="text-blue-500"
        column="done"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

const Column = ({
  title,
  headingColor,
  column,
  cards,
  setCards
}: ColumnProps) => {
  const [active, setActive] = useState(false);
  const filtered_cards = cards.filter((item) => item.column === column);
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-800">
          {filtered_cards.length}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-500/50" : "bg-neutral-500/0"
        }`}
      >
        {filtered_cards.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              id={item.id}
              column={item.column}
            />
          );
        })}
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  id: string;
  column: ColumnTypes;
}

const Card = ({ title, id, column }: CardProps) => {
  return (
    <>
      <div>{title}</div>
    </>
  );
};

const TEST_CARDS: CardProps[] = [
  //backlog cards
  { title: "Become imortal", id: "1", column: "backlog" },
  { title: "Kill god", id: "2", column: "backlog" },
  { title: "Usurp Heaven", id: "3", column: "backlog" },
  //todo cards
  { title: "Buy a toaster", id: "4", column: "todo" },
  { title: "Sell a blender", id: "5", column: "todo" },
  { title: "Beat a video game", id: "6", column: "todo" },
  //active cards
  { title: "Have a panic attack", id: "7", column: "active" },
  { title: "Eat a live snake", id: "8", column: "active" }
];

export default KanbanBoard;
