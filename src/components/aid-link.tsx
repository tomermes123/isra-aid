import { useParams } from "react-router-dom";

export type AidLink = {
  id: string;
  name: string;
  category: string;
  content: string;
};

const sheetId = "1G5E8gdgYnc3RT8jyfNhU_J2a2paEdXt5RH7rCmFJPJo";

export const links: AidLink[] = [
  {
    id: "ghi4",
    category: "a",
    name: "fourth-link",
    content: "This is the fourth link.",
  },
  {
    id: "jkl5",
    category: "a",
    name: "fifth-link",
    content: "This is the fifth link.",
  },
  {
    id: "mno6",
    category: "a",
    name: "sixth-link",
    content: "This is the sixth link.",
  },
  {
    id: "pqr7",
    category: "a",
    name: "seventh-link",
    content: "This is the seventh link.",
  },
  {
    id: "stu8",
    category: "a",
    name: "eighth-link",
    content: "This is the eighth link.",
  },
  {
    id: "vwx9",
    category: "b",
    name: "ninth-link",
    content: "This is the ninth link.",
  },
  {
    id: "yza10",
    category: "b",
    name: "tenth-link",
    content: "This is the tenth link.",
  },
  {
    id: "bcd11",
    category: "b",
    name: "eleventh-link",
    content: "This is the eleventh link.",
  },
  {
    id: "efg12",
    category: "b",
    name: "twelfth-link",
    content: "This is the twelfth link.",
  },
  {
    id: "hij13",
    category: "b",
    name: "thirteenth-link",
    content: "This is the thirteenth link.",
  },

  // ... add more link as needed
];

export const LinkDetail: React.FC = () => {
  const { linkId } = useParams<{ linkId: string }>();

  const link: AidLink | undefined = links.find((l) => l.id === linkId);

  if (!link) return <div>Link not found!</div>;

  return (
    <div>
      <h2>{link.name}</h2>
      <p>{link.content}</p>
    </div>
  );
};
