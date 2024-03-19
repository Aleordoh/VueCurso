import { defineStore } from "pinia";
import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebaseConfig.js";

export const useUserStore = defineStore("userStore", () => {
  let userData = ref(null);
  let loadingUser = ref(false);
  let loadingSession = ref(false)
  // Metodo para loguear al usuario

  const registerUser = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      userData.value = {
        email: user.email,
        uid: user.uid,
      };
    } catch (error) {
      console.error(error);
    } finally {
      loadingUser.value = true;
    }
  };

  const loginUser = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      userData.value = {
        email: user.email,
        uid: user.uid,
      };
    } catch (error) {
      console.error(error);
    } finally {
      loadingUser.value = true;
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      userData.value = null;
    } catch (error) {
      console.error(error);
    } finally {
      loadingUser.value = false;
    }
  };

  const currentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            userData.value = {
              email: user.email,
              uid: user.uid,
            };
          } else {
            userData.value = null;
          }
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );

      return unsubscribe;
    });
  };

  return {
    registerUser,
    loginUser,
    logoutUser,
    currentUser,
    userData,
    loadingUser,
    loadingSession,
  };
});
/* Store con la api de opciones */
/* export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
  }),
  actions: {
    async registerUser(email, password) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
        this.userData = {
          email: user.email,
          uid: user.uid,
        };
      } catch (error) {
        console.error(error);
      }
    },
    async loginUser(email, password) {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = {
          email: user.email,
          uid: user.uid,
        };
      } catch (error) {
        console.error(error);
      }
    },
  },
});
 */
