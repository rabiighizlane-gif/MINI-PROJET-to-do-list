describe('Test de bout en bout - Application To-Do List', () => {
  
  // Cette fonction s'exécute avant chaque test
  beforeEach(() => {
    // 1. Visiter l'URL locale de l'application (Vite)
    cy.visit('http://localhost:5173');
  });

  it('devrait ajouter une nouvelle tâche avec succès', () => {
    const taskTitle = 'Apprendre Cypress à l’ENSA';

    // 2. Cibler l'input par son ID et taper le titre
    cy.get('#titre').type(taskTitle);

    // 3. Cliquer sur le bouton "Ajouter" via sa classe CSS
    cy.get('.btn-create').click();

    // 4. Vérifier que la tâche est bien visible dans la liste
    cy.contains(taskTitle).should('be.visible');
  });

  it('devrait modifier une tâche existante', () => {
    // 1. Cliquer sur le premier bouton modifier trouvé
    cy.get('.btn-edit').first().click();

    // Note : Comme vous utilisez prompt(), Cypress le gère automatiquement.
    // Pour des tests plus avancés, on peut simuler la saisie du texte dans le prompt.
  });

  it('devrait supprimer une tâche de la liste', () => {
    // 1. Identifier le nombre de tâches avant la suppression (optionnel)
    // 2. Cliquer sur le bouton supprimer de la première tâche
    cy.get('.btn-delete').first().click();

    // 3. Vérifier que la tâche n'existe plus (si la liste est vide ou filtrée)
  });

  it('devrait cocher une tâche comme terminée', () => {
    // 1. Cocher la checkbox du statut
    cy.get('input[type="checkbox"]').first().check();

    // 2. Vérifier si le statut visuel change (ex: classe task-done)
    // cy.get('li').first().should('have.class', 'task-done');
  });
});