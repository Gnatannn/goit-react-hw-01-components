import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableLineHead,
  TableHeadText,
  TableBody,
  TableLineBody,
  TableLineText,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <TableLineHead>
          <TableHeadText>Type</TableHeadText>
          <TableHeadText>Amount</TableHeadText>
          <TableHeadText>Currency</TableHeadText>
        </TableLineHead>
      </TableHead>

      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableLineBody key={id}>
            <TableLineText>{type}</TableLineText>
            <TableLineText>{amount}</TableLineText>
            <TableLineText>{currency}</TableLineText>
          </TableLineBody>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
