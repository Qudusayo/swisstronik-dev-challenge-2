// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    // State variable
    string private myString; // You can choose between 'string' or 'uint' here

    // Constructor (optional)
    constructor(string memory initialValue) {
        myString = initialValue;
    }

    // Function to set the state variable with a new value
    function setValue(string memory newValue) public {
        require(bytes(newValue).length > 0, "Input value cannot be empty");
        myString = newValue;
    }

    // Public function to return the current value of the state variable
    function getValue() public view returns (string memory) {
        return myString;
    }
}
