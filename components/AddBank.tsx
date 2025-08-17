'use client'

import React from "react";
import PlaidLink from "./PlaidLink";

interface AddBankProps {
  user: User; // replace with your User type
}

const AddBank = ({ user }: AddBankProps) => {
  return <PlaidLink user={user} variant="add-bank" />;
};

export default AddBank;
