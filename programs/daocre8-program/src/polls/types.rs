use anchor_lang::prelude::*;

#[repr(u8)] // Represent the enum as u8
#[derive(Clone, Debug, PartialEq, AnchorSerialize, AnchorDeserialize)]
pub enum PollType {
    DecisionMaking = 0,
    MilestoneAchievement = 1,
}
