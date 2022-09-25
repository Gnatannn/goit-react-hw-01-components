import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Image,
  DescriptionText,
  List,
  ListItem,
  ListItemLabel,
  ListItemNumber,
} from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer className="profile">
      <Description className="descriptions">
        <Image src={avatar} alt={username} className="avatar" />
        <DescriptionText className="name">{username}</DescriptionText>
        <DescriptionText className="tag">@{tag}</DescriptionText>
        <DescriptionText className="location">{location}</DescriptionText>
      </Description>

      <List className="stats">
        <ListItem>
          <ListItemLabel className="label">Followers</ListItemLabel>
          <ListItemNumber className="quantity">
            {stats.followers}
          </ListItemNumber>
        </ListItem>
        <ListItem>
          <ListItemLabel className="label">Views</ListItemLabel>
          <ListItemNumber className="quantity">{stats.views}</ListItemNumber>
        </ListItem>
        <ListItem>
          <ListItemLabel className="label">Likes</ListItemLabel>
          <ListItemNumber className="quantity">{stats.likes}</ListItemNumber>
        </ListItem>
      </List>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
