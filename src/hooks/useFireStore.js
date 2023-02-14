import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, onSnapshot, orderBy } from "firebase/firestore";

function useFireStore(collectionName) {
    const [docs, setdocs] = useState([]);
    const colRef = collection(db, collectionName);

    useEffect(()=>{
        onSnapshot(colRef, (snapshot)=>{
            const documents = [];
                snapshot.docs.forEach((doc)=>{
                    documents.push({...doc.data(), id : doc.id})
                });
                setdocs(documents);
        })
    }, [collectionName]);

    return { docs };
}

export default useFireStore