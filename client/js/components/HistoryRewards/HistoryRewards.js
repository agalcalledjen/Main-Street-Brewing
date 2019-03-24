import React, { Fragment } from 'react';
import { View, Image } from 'react-native';

import CustomText from '../CustomText';
import styles from './styles';

const HistoryRewards = ({ allRewards, points }) => {
  const setImg = reward => {
    if (reward.points === null) {
      reward.img = require('../../assets/images/Card/star_1_stamp.png');
    } else if (reward.points === 20) {
      reward.img = require('../../assets/images/Card/20_stamps_icon.png');
    } else if (reward.points === 40) {
      reward.img = require('../../assets/images/Card/40_stamps_icon.png');
    } else if (reward.points === 60) {
      reward.img = require('../../assets/images/Card/60_stamps_icon.png');
    } else if (reward.points === 80) {
      reward.img = require('../../assets/images/Card/80_stamps_icon.png');
    } else if (reward.points === 140) {
      reward.img = require('../../assets/images/Card/140_stamps_icon.png');
    } else if (reward.points === 200) {
      reward.img = require('../../assets/images/Card/200_stamps_icon.png');
    } else if (reward.points === 240) {
      reward.img = require('../../assets/images/Card/240_stamps_icon.png');
    }
  };

  let previousReward = { title: null, img: null, points: null };
  let nextReward = { title: null, img: null, points: null };

  // sort allRewards by points that the reward requires, in increasing order
  allRewards.sort((reward1, reward2) => reward1.points - reward2.points);
  console.log(allRewards);
  // go through each reward in allRewards, stop as soon as reward.points >= points

  let nextRewardIndex;
  for (let i = 0; i < allRewards.length; i++) {
    const currentReward = allRewards[i];
    if (currentReward.points >= points) {
      nextRewardIndex = i;
      break;
    }
  }

  if (nextRewardIndex !== undefined) {
    nextReward.title = allRewards[nextRewardIndex].title;
    nextReward.points = allRewards[nextRewardIndex].points;
    if (nextRewardIndex > 0) {
      previousReward.title = allRewards[nextRewardIndex - 1].title;
      previousReward.points = allRewards[nextRewardIndex - 1].points;
    }
  } else {
    // this is the case when the number of points is larger than all of the rewards
    const lastReward = allRewards[allRewards.length - 1];
    previousReward.title = lastReward.title;
    previousReward.points = lastReward.points;
  }
  setImg(previousReward);
  setImg(nextReward);

  const rewardsArray = [previousReward, nextReward];
  // this reward will become nextReward, and the one before that will become previousReward

  // let rewardImg;
  // let rewardTitle;
  // let rewardPts;

  // if (allRewards.points < 20) {
  //   rewardImg = require('../../assets/images/Card/star_1_stamp.png');
  //   rewardTitle = allRewards.title;
  //   rewardPts = allRewards.points;
  // } else if (allRewards.points === 20) {
  //   rewardImg = require('../../assets/images/Card/20_stamps_icon.png');
  //   rewardTitle = allRewards.title;
  //   rewardPts = allRewards.points;
  // } else if (allRewards.points === 40) {
  //   rewardImg = require('../../assets/images/Card/40_stamps_icon.png');
  //   rewardTitle = allRewards.title;
  //   rewardPts = allRewards.points;
  // } else if (allRewards.points === 60) {
  //   rewardImg = require('../../assets/images/Card/60_stamps_icon.png');
  //   rewardTitle = allRewards.title;
  //   rewardPts = allRewards.points;
  // } else if (allRewards.points === 80) {
  //   rewardImg = require('../../assets/images/Card/80_stamps_icon.png');
  //   rewardTitle = allRewards.title;
  //   rewardPts = allRewards.points;
  // } else if (allRewards.points === 140) {
  //   rewardImg = require('../../assets/images/Card/140_stamps_icon.png');
  //   rewardTitle = allRewards.title;
  //   rewardPts = allRewards.points;
  // } else if (allRewards.points === 200) {
  //   rewardImg = require('../../assets/images/Card/200_stamps_icon.png');
  //   rewardTitle = allRewards.title;
  //   rewardPts = allRewards.points;
  // } else if (allRewards.points === 240) {
  //   rewardImg = require('../../assets/images/Card/240_stamps_icon.png');
  //   rewardTitle = allRewards.title;
  //   rewardPts = allRewards.points;
  // }

  return (
    <View style={styles.rewards}>
      {rewardsArray.map((reward, index) => {
        return (
          <View style={styles.prevReward} key={reward.title}>
            <CustomText style={styles.rewardsTitle}>
              {index === 0 ? 'Previous Reward' : 'Next Reward'}
            </CustomText>
            <CustomText style={styles.stamps}>
              {reward.points === 0 ? '0 Stamp' : `${reward.points} Stamps`}
            </CustomText>
            <Image source={reward.img} style={styles.rewardsImg} />
            <CustomText style={styles.reward}>{reward.title}</CustomText>
          </View>
        );
      })}
      <View style={styles.vl} />
    </View>
  );
};

export default HistoryRewards;
