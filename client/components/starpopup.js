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
  const [userRating, setUserRating] = useState(0)
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
      //console.log(`Average rating data: ${data["avg_rating"]}`)
      //https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
      setAvgRating(Math.round((data["avg_rating"] + Number.EPSILON) * 100) / 100)
    } catch(error) {
      console.error("Error finding avg rating info:", error);
    }
  }
  getAvgRating()
  const getUserRating = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/get_specific_rating?firebase_user_id=${firebaseUserId}&recipe_id=${parent_recipe_id}`,
      )
      const data = await res.json(); // Parse response JSON data
      //console.log(`Average rating data: ${data["user_rating"]}`)
      //https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
      // console.log("getAvgRating says this about the user:")
      // console.log(JSON.stringify(data))
      setUserRating(Math.round((data["rating"] + Number.EPSILON) * 100) / 100)
    } catch(error) {
      console.error("Error finding user rating info:", error);
    }
  }
  getUserRating()
  const updateRatings = async () => {
    try {
      //const token = await currentUser.getIdToken();
      if (firebaseUserId == null) {
        //console.log("no user uid given")
        throw new Error('You are not logged in')
      }
      if (myRating == 0) {
        //console.log("bad rating")
        throw new Error('Rating cannot be 0 (maybe you didnt catch it)')
      }
      if (parent_recipe_id == null) {
        //console.log("no recipe uid given")
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

  const yourRatingIs = () => {
    if (userRating > 0) {
      return (
        <ModalBody>
          You gave this recipe a rating of {userRating}.
        </ModalBody>
      )
    }
    else {
      return (
        <ModalBody>
          You have not yet given this recipe a rating.
        </ModalBody>
      )
    }
  }
  const avgRatingIs = () => {
    if (avgRating > 0) {
      return (
        <ModalBody>
          The recipe average rating is {avgRating}.
        </ModalBody>
      )
    }
    else {
      return (
        <ModalBody>
          This recipe has no ratings yet.
        </ModalBody>
      )
    }
  }

  if (firebaseUserId == null) { //login before rating
    return (
      (
        <>
          <Button className="bg-[#FF9800] text-[#212121] border-[#ff5252]" onPress={onOpen}>Rate</Button>
          <Modal backdrop="blur" 
          isOpen={isOpen} 
          onOpenChange={onOpenChange} 
          isDismissable={false} 
          isKeyboardDismissDisabled={true}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              }
            }
          }}
          classNames={{
            backdrop: "blurred",
            base: "border-[#F57C00] bg-[#FFFFFF] text-[#212121]",
            header: "border-b-[2px] border-[#FFE0B2]",
            footer: "border-t-[2px] border-[#FFE0B2]",
          }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">You must login first before you can rate.</ModalHeader>
                  <ModalBody>
                    The recipe average rating is {avgRating}.
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
      <Button className="bg-[#FF9800] text-[#212121] border-[#ff5252]" onPress={onOpen} size="lg">Rate this Recipe</Button>
      <Modal backdrop="blur" 
      isOpen={isOpen} 
      onOpenChange={onOpenChange} 
      isDismissable={false} 
      isKeyboardDismissDisabled={true}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          }
        }
      }}
      classNames={{
        backdrop: "blurred",
        base: "border-[#F57C00] bg-[#FFFFFF] text-[#212121]",
        header: "border-b-[2px] border-[#FFE0B2]",
        footer: "border-t-[2px] border-[#FFE0B2]",
      }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-[#F57C00]">Give Your Rating</ModalHeader>
              {
                avgRatingIs()
              }
              {
                yourRatingIs()
              }
              <ModalBody>
                {
                  //https://stackoverflow.com/questions/65895361/pass-callback-function-from-parent-component-to-child-component-react
                }
                <Stars parentRating={myRating} onRatingChange={(value) => {setMyRating(value)}}/> {/* passing a function to grab the rating value from child */}
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