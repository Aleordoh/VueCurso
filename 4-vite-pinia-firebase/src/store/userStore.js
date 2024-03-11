import { defineStore } from "pinia";
import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig.js";

export const useUserStore = defineStore("userStore", () => {
  let userData = ref({});
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
    }
  };

  return {
    registerUser,
    loginUser,
    userData,
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
