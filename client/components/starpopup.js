import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Stars from "./stars";
//import id from '../pages/recipe/[id]';
import { useAuth } from '../firebase/userAuthContext';
import { auth } from '../firebase/firebaseConfig';
import { useRouter } from 'next/router';
import {useState, useCallback} from 'react'

function StarsPopup({parent_recipe_id}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [myRating, setMyRating] = useState(0)
  const [avgRating, setAvgRating] = useState(0)
  const getRating = (my_rating) => {
    setMyRating(my_rating)
  }
  //const { currentUser } = useAuth(); //use Firebase auth to get user info (I need the uid)
  const router = useRouter(); // Initialize useRouter hook to access router object
  //const { recipe_id } = router.query; // Get the id from the router query
  const firebaseUserId = auth.currentUser ? auth.currentUser.uid : null;
  const getAvgRating = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/get_avg_rating?recipe_id=${parent_recipe_id}`,
      )
      const data = await res.json(); // Parse response JSON data
      console.log(`Average rating data: ${data["avg_rating"]}`)
      //https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
      setAvgRating(Math.round((data["avg_rating"] + Number.EPSILON) * 100) / 100)
    } catch(error) {
      console.error("Error finding avg rating info:", error);
    }
  }
  getAvgRating()
  const updateRatings = async () => {
    try {
      //const token = await currentUser.getIdToken();
      if (firebaseUserId == null) {
        console.log("no user uid given")
        throw new Error('You are not logged in')
      }
      if (myRating == 0) {
        console.log("bad rating")
        throw new Error('Rating cannot be 0 (maybe you didnt catch it)')
      }
      if (parent_recipe_id == null) {
        console.log("no recipe uid given")
        throw new Error('no Recipe ID found')
      }
      const response = await fetch(
        // example call:     public_server_url/add_rating?firebase_user_id=123&recipe_id=13&rating=4
        `${process.env.NEXT_PUBLIC_SERVER_URL}/add_rating?firebase_user_id=${firebaseUserId}&recipe_id=${parent_recipe_id}&rating=${myRating}`,
        //{method: "POST"}
      );
      if (!response.ok) {
        throw new Error(`Failed to update rating info: status is: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating rating info:", error);
    }
  }

  if (firebaseUserId == null) { //login before rating
    return (
      (
        <>
          <Button onPress={onOpen}>Rate</Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">You must login first before you can rate.</ModalHeader>
                  <ModalBody>
                    This recipe's average rating is {avgRating}.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      )
    )
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
                This recipe's average rating is {avgRating}.
              </ModalBody>
              <ModalBody>
                {
                  //https://stackoverflow.com/questions/65895361/pass-callback-function-from-parent-component-to-child-component-react
                }
                <Stars parentRating={myRating} onRatingChange={(value) => {console.log(`rating change: ${value}`); setMyRating(value)}}/> {/* passing a function to grab the rating value from child */}
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