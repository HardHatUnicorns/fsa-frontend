import { PropsWithChildren } from "react";
import "./Table.css";

export const Table = ({ children }: PropsWithChildren) => {
  return <table className="bg-white border-8 border-white">{children}</table>;
};

export const TableHead = ({ children }: PropsWithChildren) => {
  return <thead className="bg-[#F3F3F3]">{children}</thead>;
};

export const TableHeadCell = ({ children }: PropsWithChildren) => {
  return <th className="px-12 py-2">{children}</th>;
};

export const TableBody = ({ children }: PropsWithChildren) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children }: PropsWithChildren) => {
  return <tr className="font-bold max-h-[120px]">{children}</tr>;
};

export const TableCell = ({ children }: PropsWithChildren) => {
  return <td className="px-12 py-2">{children}</td>;
};
