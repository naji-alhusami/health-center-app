import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogo from '../Images/GoogleLogo.svg';
import { loginUserWithGoogle } from '../../features/users/usersSlice';

const LoginWithGoogle = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-around">
        <p className='text-bold text-xl'>OR</p>
      </div>
      <div className="flex justify-center my-6 gap-x-20">
        <button
          type="button"
          onClick={(userDat) => {
            console.log(userDat);
            dispatch(
              loginUserWithGoogle({ id: userDat.id, email: userDat.email })
            );
          }}
        >
          <img src={GoogleLogo} alt="Google logo" className="cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default LoginWithGoogle;
