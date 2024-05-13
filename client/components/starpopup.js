import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Stars from "./stars";
//import id from '../pages/recipe/[id]';
import { useAuth } from '../firebase/userAuthContext';
import { auth } from '../firebase/firebaseConfig';
import { useRouter } from 'next/router';
import {useState, useCallback} from 'react'

function StarsPopup() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [rating, setRating] = useState(0)
  const getRating = (my_rating) => {
    setRating(my_rating)
  }
  //const { currentUser } = useAuth(); //use Firebase auth to get user info (I need the uid)
  const router = useRouter(); // Initialize useRouter hook to access router object
  const { recipe_id } = router.query; // Get the id from the router query
  const firebaseUserId = auth.currentUser ? auth.currentUser.uid : null;
  const updateRatings = async () => {
    try {
      //const token = await currentUser.getIdToken();
      if (firebaseUserId == null) {
        console.log("no user uid given")
        throw new Error('You are not logged in')
      }
      if (recipe_id == null) {
        console.log("no recipe uid given")
        throw new Error('no Recipe ID found')
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/add_rating?firebase_user_id=${firebaseUserId}recipe_id=${recipe_id}&rating=${rating}`,
        {method: "POST"}
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
                <Stars getRating={useCallback(() => getRating(), [setRating])}/> {/* passing a function to grab the rating value from child */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => {updateRatings(); onClose();}}>
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