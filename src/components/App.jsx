import user from 'components/Profile/user.json';
import { Profile } from './Profile/Profile';
import { StatsHead } from './Statistics/StatsHead';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <StatsHead />
    </div>
  );
};
