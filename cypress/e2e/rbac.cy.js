describe('RBAC APP', () => {
  const admin = {
    email: 'admin@gmail.com',
    password: 'admin',
  };

  const user = {
    email: 'user1@gmail.com',
    password: 'testuser',
  };

  it('should load home page and navigate to login', () => {
    cy.visit('/');
    cy.url().should('include', '/home');
    cy.contains('Welcome to the RBAC APP');
    cy.contains('Get Started').click();
    cy.url().should('include', '/login');
  });

  it('should show error for invalid credentials', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('wrong@user.com');
    cy.get('input[name="password"]').type('wrongpass');
    cy.contains('LOGIN').click();
    cy.contains('Invalid email or password');
  });

  it('should login as admin and access admin panel', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').clear().type(admin.email);
    cy.get('input[name="password"]').clear().type(admin.password);
    cy.contains('LOGIN').click();
    cy.url().should('include', '/admin');
    cy.contains('Admin Panel');
  });

  it('should login as user and access user dashboard', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').clear().type(user.email);
    cy.get('input[name="password"]').clear().type(user.password);
    cy.contains('LOGIN').click();
    cy.url().should('include', '/user');
    cy.contains('User Dashboard');
  });

it('should redirect to login when accessing /admin directly without authentication', () => {
    cy.clearLocalStorage();
    cy.visit('/admin', { failOnStatusCode: false });
    cy.url().should('include', '/login');
    cy.contains('Login').should('be.visible');
  });
});


  
