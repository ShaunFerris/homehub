"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { FaFire } from "react-icons/fa";
import { FiTrash, FiPlus } from "react-icons/fi";

type ColumnTypes = "backlog" | "todo" | "active" | "done";

interface ColumnProps {
  title: string;
  headingColor: string;
  column: ColumnTypes;
  cards: CardProps[];
  setCards: Dispatch<SetStateAction<CardProps[]>>;
}

const KanbanBoard = () => {
  return (
    <div className="h-screen w-full bg-neutral-100/0 text-neutral-900 overflow-scroll flex justify-items-center">
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
      <DeleteZone setCards={setCards} />
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
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards} />
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
      <DropIndicator beforeId={id} column={column} />
      <div
        draggable="true"
        className="cursor-grab rounded border border-neutral-700 bg-neutral-400 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-900">{title}</p>
      </div>
    </>
  );
};

interface DropIndicatorProps {
  beforeId: string;
  column: ColumnTypes;
}

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-blue-400 opacity-100" //change the opacity value on hover later
    />
  );
};

const DeleteZone = ({
  setCards
}: {
  setCards: Dispatch<SetStateAction<CardProps[]>>;
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`mt-10 grid h-36 w-36 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/50 text-red-500"
          : "border-neutral-500 bg-neutral-500/50 text-neutral-900"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

interface AddCardProps {
  column: ColumnTypes;
  setCards: Dispatch<SetStateAction<CardProps[]>>;
}

const AddCard = ({ column, setCards }: AddCardProps) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleAddCard = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {adding ? (
        <form onSubmit={handleAddCard}>
          <textarea
            autoFocus
            placeholder="Enter a new task..."
            className="w-full rounded border border-black bg-neutral-400/50 focus:outline-none placeholder-neutral-600 placeholder:text-sm text-sm p-3"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-900 transition-colors hover:text-red-500"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center rounded gap-1.5 px-3 py-1.5 text-neutral-900 transition-colors hover:bg-green-400/50 text-xs"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-900 transition-colors hover:text-blue-400"
        >
          <span>Add Card</span>
          <FiPlus />
        </button>
      )}
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
