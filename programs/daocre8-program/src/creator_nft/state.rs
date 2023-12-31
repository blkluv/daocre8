use anchor_lang::prelude::*;

#[derive(Clone, Debug, PartialEq, AnchorSerialize, AnchorDeserialize)]
pub enum Rarity {
    Starter,
    Builder,
    Innovator,
    Visionary,
    Legend,
}

impl Rarity {
    pub fn upgrade_rarity(&mut self) {
        match self {
            Rarity::Starter => {
                *self = Rarity::Builder;
            }
            Rarity::Builder => {
                *self = Rarity::Innovator;
            }
            Rarity::Innovator => {
                *self = Rarity::Visionary;
            }
            Rarity::Visionary => {
                *self = Rarity::Legend;
            }
            Rarity::Legend => (),
        }
    }
}

#[derive(Clone, AnchorSerialize, AnchorDeserialize)]
pub struct CreatorMetadata {
    pub title: String,
    pub description: String,
    pub image_uri: String,
}

#[account]
pub struct CreatorNFTCollection {
    pub authority: Pubkey,
    pub metadata: CreatorMetadata,
}

#[account]
pub struct CreatorNFT {
    pub collection: Pubkey,
    pub owner: Pubkey,
    pub project_dao_id: Pubkey,
    pub rarity: Rarity,
}
