import PropTypes from 'prop-types';
import {
  Section,
  List,
  ListItem,
  Status,
  Image,
  ListItemName,
} from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <ListItem key={id}>
            <Status isOnline={isOnline}></Status>
            <Image src={avatar} alt="User avatar" width="48"></Image>
            <ListItemName>{name}</ListItemName>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
