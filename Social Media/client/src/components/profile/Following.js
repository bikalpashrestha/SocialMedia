import React from 'react'
import userCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import { useSelector } from 'react-redux'
import UserCard from '../UserCard'

const Following = ({users, setShowFollowing}) => {
    const { Auth} = useSelector(state => state)
    
    return (
        <div classname="Follow">
            <div classname="folloow_box">
                <h5 className="text-center   ">Following</h5>
                <hr/>
                {
                    users.map(user => (
                        <UserCard key={user._id} user={user} setShowFollowing={setShowFollowing}>
                            {
                                Auth.user._id !== user._id && <FollowBtn user={user} />
                            }

                        </UserCard>
                    ))
                }

                <div className="close" onClick={() => setShowFollowing(false)}>
                &times;
            </div>
              
            </div>
        </div>
    )
            }
            export default Following