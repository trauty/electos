CREATE TABLE account (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    street VARCHAR(255) NOT NULL,
    plz VARCHAR(10) NOT NULL,
    location VARCHAR(100) NOT NULL,
    iban VARCHAR(34) NOT NULL,
    blz VARCHAR(8) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW() ON UPDATE NOW()
);

CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    fk_account_id INT,
    FOREIGN KEY (fk_account_id) REFERENCES account(account_id)
);

CREATE TABLE receipt (
    receipt_id INT AUTO_INCREMENT PRIMARY KEY,
    created_at DATETIME DEFAULT NOW()
);

CREATE TABLE category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE manufacturer (
    manufacturer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    homepage VARCHAR(512),
    email VARCHAR(255)
);

CREATE TABLE product (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    price DECIMAL(9, 2) NOT NULL,
    image VARCHAR(512),
    fk_category_id INT,
    fk_manufacturer_id INT,
    FOREIGN KEY (fk_category_id) REFERENCES category(category_id),
    FOREIGN KEY (fk_manufacturer_id) REFERENCES manufacturer(manufacturer_id)
);

CREATE TABLE products_in_cart (
    PRIMARY KEY (fk_product_id, fk_cart_id),
    CONSTRAINT unique_cart_product UNIQUE (fk_product_id, fk_cart_id),
    fk_product_id INT,
    fk_cart_id INT,
    FOREIGN KEY (fk_product_id) REFERENCES product(product_id) ON DELETE CASCADE,
    FOREIGN KEY (fk_cart_id) REFERENCES cart(cart_id) ON DELETE CASCADE,
    amount INT NOT NULL
);

CREATE TABLE receipt_products (
    PRIMARY KEY (fk_product_id, fk_receipt_id),
    CONSTRAINT unique_receipt_product UNIQUE (fk_product_id, fk_receipt_id),
    fk_product_id INT,
    fk_receipt_id INT,
    FOREIGN KEY (fk_product_id) REFERENCES product(product_id) ON DELETE CASCADE,
    FOREIGN KEY (fk_receipt_id) REFERENCES receipt(receipt_id) ON DELETE CASCADE,
    amount INT NOT NULL
);