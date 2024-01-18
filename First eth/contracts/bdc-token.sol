pragma solidity ^0.5.0;

library SafeMath {
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a / b;
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}
contract ERC20Interface {
  function totalSupply() public view returns (uint256);
  function balanceOf(address _who) public view returns (uint256);
  function transfer(address _to, uint256 _value) public returns (bool);
  event Transfer(
    address indexed from,
    address indexed to,
    uint256 value
  );
}

contract Bdctoken is ERC20Interface{
  using SafeMath for uint256;
  string public constant name = 'BloodDonorCoin';
  string public constant symbol = 'BDC';
  uint8 public constant decimals = 3;
  uint _totalSupply;
  address public owner;
  mapping(address => uint) balances;

  constructor() public payable {
    owner = msg.sender;
    _totalSupply = 100000000 * 10**uint(decimals);//Setting initial total supply as 10000000 tokens
    balances[owner] = _totalSupply;
    emit Transfer(address(0), owner,_totalSupply);//Transfer event called
  }
  modifier onlyOwner {
    require(msg.sender == owner,"Only Owner can access");
    _;
  }
  function totalSupply() public view returns (uint){
    return _totalSupply - balances[address(0)];
  }
  function balanceOf(address tokenOwner) public view returns (uint balance){
    return balances[tokenOwner];
  }
  function transfer(address _to, uint256 _value) public returns (bool){
    balances[msg.sender] = balances[msg.sender] - _value;
    balances[_to] = balances[_to] + _value;
    emit Transfer(msg.sender,_to,_value);
    return true;
  }
}