import {TableBuilder, TableBuilderColumn} from 'baseui/table-semantic';
import {StyledLink} from 'baseui/link';
import {HeadingMedium} from 'baseui/typography';
import {useStyletron} from 'baseui';
import {useNavigate} from 'react-router-dom';
import {useServices} from './Services.hook';
import {Button, KIND} from 'baseui/button';
import {Trash} from 'react-feather';

export const Services = () => {
  const {isAuthenticated, services, isSuccess, handleDelete} = useServices();
  const [css, theme] = useStyletron();
  const navigate = useNavigate();
  return (
    <div>
      {isAuthenticated ? (
        <>
          <div
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            })}
          >
            <HeadingMedium>Registered services.</HeadingMedium>
            <Button onClick={() => navigate('/services/new')}>New</Button>
          </div>
          <div
            className={css({
              margin: theme.sizing.scale1000 + ' 0',
            })}
          >
            {isSuccess && (
              <TableBuilder data={[].concat(services)}>
                <TableBuilderColumn header="Name">
                  {({name, _id}) => (
                    <StyledLink
                      className={css({cursor: 'pointer'})}
                      onClick={() => navigate(`/services/${_id}`)}
                    >
                      {name}
                    </StyledLink>
                  )}
                </TableBuilderColumn>
                <TableBuilderColumn header="Time in minutes">
                  {({timeInMinutes}) => timeInMinutes}
                </TableBuilderColumn>
                <TableBuilderColumn header="">
                  {({_id}) => (
                    <Button
                      kind={KIND.tertiary}
                      onClick={() => handleDelete(_id)}
                    >
                      <Trash />
                    </Button>
                  )}
                </TableBuilderColumn>
              </TableBuilder>
            )}
          </div>
        </>
      ) : (
        <HeadingMedium>You are not authenticated</HeadingMedium>
      )}
    </div>
  );
};
