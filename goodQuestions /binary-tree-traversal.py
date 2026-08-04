def treeTraversal(root):
    if root is None: return []

    pre_order = []
    in_order = []
    post_order = []
    stack = [[root, 1]]

    while stack:
        node, idx = stack[-1]

        if idx == 1:
            pre_order.append(node.val)
            stack[-1][1] = 2

            if node.left is not None:
                stack.append([node.left, 1])

        elif idx == 2:
            in_order.append(node.val)
            stack[-1][1] = 3

            if node.right is not None:
                stack.append([node.right, 1])

        else: 
            post_order.append(node.val) 
            stack.pop()
        
    print(f"""
    pre_order: {pre_order}
    in_order: {in_order}
    post_order: {post_order}
    """)
    
    # return  preOrder, in_order, post_order