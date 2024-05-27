import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";

export const registerInputs = [
    {
      name: 'name',
      type: 'text',
      Icon: IoPerson
    },
    {
        name: 'email',
        type: 'email',
        Icon: MdEmail
    },
    {
        name: 'password',
        type: 'password',
        Icon: IoIosLock
    },
    {
        name: 'confirm-password',
        type: 'password',
        Icon: IoIosLock
    }
];

export const loginInputs = [
    {
        name: 'email',
        type: 'email',
        Icon: MdEmail
    },
    {
        name: 'password',
        type: 'password',
        Icon: IoIosLock
    },
]