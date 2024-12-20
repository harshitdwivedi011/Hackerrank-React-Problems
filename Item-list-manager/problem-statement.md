# Item List Manager
### Problem Link: 
- https://www.hackerrank.com/challenges/item-list-manager/problem

## Problem Statement
- You are tasked with creating a simple React application called "Item List Manager" that displays a list of
items and allows users to add new items to the list. The items will be displayed in an unordered list
( <ul> ), and there will be an input field along with a button to add new items to this list.

### Detailed Requirements
1. When the application loads, it should display an empty list.
2. The input field should accept user text input.
3. When the button is clicked:
4. The text from the input field should be added to the list.
5. The input field should be cleared.
6. If the input field is empty and the button is clicked, nothing should be added to the list.

### Sample Interaction
- Initial State
1. The list is empty.
2. The input field is empty.

#### User Action 1

1. User types "First Item" in the input field.
2. User clicks "Add Item" button.
3. The list displays "First Item".

#### User Action 2

1. User types "Second Item" in the input field.
2. User clicks "Add Item" button.
3. The list displays:
- "First Item"
- "Second Item"