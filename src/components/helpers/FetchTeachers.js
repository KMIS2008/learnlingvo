import { database } from "components/database";
import { ref, get} from 'firebase/database';


export const fetchTeachers = async ({setTeachers}) => {
    try {
      const dbRef = ref(database, '/');
      const data = await get(dbRef);

      if (data.exists()) {
        setTeachers(data.val());
      }
    } catch (error) {
      console.error('Loading error', error.message);
    }
  };

