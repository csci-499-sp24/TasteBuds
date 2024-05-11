import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Stars from "./stars";
//import id from '../pages/recipe/[id]';
import { useAuth } from '../firebase/userAuthContext';
import { useRouter } from 'next/router';

function StarsPopup() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const { currentUser } = useAuth(); //use Firebase auth to get user info (I need the uid)
  const router = useRouter(); // Initialize useRouter hook to access router object
  const { id } = router.query; // Get the id from the router query
  const updateRatings = async () => {
    try {
      //const token = await currentUser.getIdToken();
      if (currentUser.uid == null) {
        console.log("no user uid given")
        throw new Error('You are not logged in')
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/add_rating?firebase_user_id=${currentUser.uid}recipe_id=${id}&rating=${rating}`
      );
      if (!response.ok) {
        throw new Error('Failed to update rating info');
      }
    } catch (error) {
      console.error("Error updating rating info:", error);
    }
  }

  return (
    <>
      <Button onPress={onOpen}>Rate</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Give Your Rating</ModalHeader>
              <ModalBody>
                <Stars />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default StarsPopup;