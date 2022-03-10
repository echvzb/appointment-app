import {TableBuilder, TableBuilderColumn} from 'baseui/table-semantic';
import {StyledLink} from 'baseui/link';
import {HeadingMedium} from 'baseui/typography';
import {useStyletron} from 'baseui';
import {useHome} from './Home.hook';

export const Home = () => {
  const {isAuthenticated, users, isSuccess} = useHome();
  const [css, theme] = useStyletron();

  return (
    <div>
      {isAuthenticated && isSuccess ? (
        <div
          className={css({
            margin: theme.sizing.scale1000 + ' 0',
          })}
        >
          <TableBuilder data={[].concat(users)}>
            <TableBuilderColumn header="Name">
              {({profile}) => (
                <StyledLink className={css({cursor: 'pointer'})}>
                  {profile.name}
                </StyledLink>
              )}
            </TableBuilderColumn>
            <TableBuilderColumn header="Email">
              {({profile}) => profile.email}
            </TableBuilderColumn>
          </TableBuilder>
        </div>
      ) : (
        <HeadingMedium>You are not authenticated</HeadingMedium>
      )}
    </div>
  );
};
