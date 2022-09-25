import PropTypes from 'prop-types';
import {
  Section,
  Title,
  Stats,
  ListItem,
  ListItemLabel,
  ListItemNumber,
} from './Statistics.styled';

export const Statistics = ({ title, stats = [] }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}
      <Stats className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <ListItemLabel>{label}</ListItemLabel>
            <ListItemNumber>{percentage}</ListItemNumber>
          </ListItem>
        ))}
      </Stats>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
