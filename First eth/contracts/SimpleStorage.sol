pragma solidity ^0.5.16;
contract SimpleStorage {
    uint256 public storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
contract DonorRegister{
  enum gender { male, female, other}
  enum bGrp { AP, AN, BP, BN,OP, ON,ABP,ABN}
  enum status {NotAvailavle,Available}
  struct bDonor{
        string name;
        uint age;
        string place;
        uint mob;
        bool medCond;
        gender donGen;
        bGrp grp;
        bool donorStatus;
        bool active;
     }
}
