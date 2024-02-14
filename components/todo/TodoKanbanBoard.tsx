"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface ColumnProps {
  title: string;
  headingColor: string;
  column: string;
  cards: any[];
  setCards: Dispatch<SetStateAction<any[]>>;
}

const KanbanBoard = () => {
  return (
    <div className="h-screen w-full bg-neutral-100 text-neutral-900">
      KanbanBoard
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState([]);
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        headingColor="text-neutral-500"
        column="backlog"
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
  return <div></div>;
};

export default KanbanBoard;
