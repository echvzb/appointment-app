import {
  HeadingMedium,
  ParagraphMedium,
  ParagraphLarge,
} from 'baseui/typography';
import {useStyletron} from 'baseui';
import {Button} from 'baseui/button';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from 'baseui/modal';
import {useCalendar} from './Calendar.hook';
import {CalendarProvider} from './Calendar.context';
import {CalendarHeader, CalendarBody, CalendarServices} from './components';

export const CalendarContent = () => {
  const {
    profile,
    handleExit,
    userService,
    handleSubmit,
    isCreateEventSuccess,
    isCreateEventLoading,
  } = useCalendar();
  const [css] = useStyletron();
  if (profile) {
    return (
      <>
        {!userService._id ? (
          <>
            <HeadingMedium>
              Make an appointment with {profile.name}
            </HeadingMedium>
            <ParagraphMedium>
              Select one of the following services:
            </ParagraphMedium>
            <CalendarServices />
          </>
        ) : (
          <>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <ParagraphLarge>
                Service: <strong>{userService.name}. </strong> <br />
                Duration: <strong>{userService.timeInMinutes} minutes.</strong>
              </ParagraphLarge>
              <Button
                onClick={handleSubmit}
                isLoading={isCreateEventLoading}
                disabled={isCreateEventSuccess}
              >
                Create
              </Button>
            </div>
            <CalendarHeader />
            <CalendarBody />
            <Modal
              onClose={handleExit}
              closeable
              isOpen={isCreateEventSuccess}
              animate
              autoFocus
              size={SIZE.default}
              role={ROLE.dialog}
            >
              <ModalHeader>Appointment created!</ModalHeader>
              <ModalBody>Check your Google Calendar.</ModalBody>
              <ModalFooter>
                <ModalButton onClick={handleExit}>Okay</ModalButton>
              </ModalFooter>
            </Modal>
          </>
        )}
      </>
    );
  }
  return null;
};

export const Calendar = () => {
  return (
    <CalendarProvider>
      <CalendarContent />
    </CalendarProvider>
  );
};
