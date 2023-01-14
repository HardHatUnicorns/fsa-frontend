import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
} from "~/components/shared/Table";

export const Tickets = () => {
  return (
    <div className="w-full p-8 flex justify-center">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Cinema</TableHeadCell>
            <TableHeadCell>Location</TableHeadCell>
            <TableHeadCell>Date</TableHeadCell>
            <TableHeadCell>Standard Price</TableHeadCell>
            <TableHeadCell>Deducted Price</TableHeadCell>
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <img src="https://via.placeholder.com/190x105.png" />
            </TableCell>
            <TableCell>Kraków</TableCell>
            <TableCell>16:00 24.01.2023</TableCell>
            <TableCell>50 PLN</TableCell>
            <TableCell>25 PLN</TableCell>
            <TableCell>
              <button className="bg-company-yellow p-4">Buy a ticket</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img src="https://via.placeholder.com/190x105.png" />
            </TableCell>
            <TableCell>Kraków</TableCell>
            <TableCell>16:00 24.01.2023</TableCell>
            <TableCell>50 PLN</TableCell>
            <TableCell>25 PLN</TableCell>
            <TableCell>
              <button className="bg-company-yellow p-4">Buy a ticket</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img src="https://via.placeholder.com/190x105.png" />
            </TableCell>
            <TableCell>Kraków</TableCell>
            <TableCell>16:00 24.01.2023</TableCell>
            <TableCell>50 PLN</TableCell>
            <TableCell>25 PLN</TableCell>
            <TableCell>
              <button className="bg-company-yellow p-4">Buy a ticket</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img src="https://via.placeholder.com/190x105.png" />
            </TableCell>
            <TableCell>Kraków</TableCell>
            <TableCell>16:00 24.01.2023</TableCell>
            <TableCell>50 PLN</TableCell>
            <TableCell>25 PLN</TableCell>
            <TableCell>
              <button className="bg-company-yellow p-4">Buy a ticket</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img src="https://via.placeholder.com/190x105.png" />
            </TableCell>
            <TableCell>Kraków</TableCell>
            <TableCell>16:00 24.01.2023</TableCell>
            <TableCell>50 PLN</TableCell>
            <TableCell>25 PLN</TableCell>
            <TableCell>
              <button className="bg-company-yellow p-4">Buy a ticket</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <img src="https://via.placeholder.com/190x105.png" />
            </TableCell>
            <TableCell>Kraków</TableCell>
            <TableCell>16:00 24.01.2023</TableCell>
            <TableCell>50 PLN</TableCell>
            <TableCell>25 PLN</TableCell>
            <TableCell>
              <button className="bg-company-yellow p-4">Buy a ticket</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
