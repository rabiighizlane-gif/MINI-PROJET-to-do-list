describe('Tests de l’API Backend (PostgreSQL)', () => {
  
  const apiUrl = 'http://localhost:3000/tasks';

  it('devrait retourner la liste des tâches (GET /tasks)', () => {
    cy.request('GET', apiUrl).then((response) => {
      // Vérifier le code de statut (200 OK)
      expect(response.status).to.eq(200);
      // Vérifier que la réponse est bien une liste (Array)
      expect(response.body).to.be.an('array');
    });
  });

  it('devrait ajouter une tâche via l’API (POST /tasks)', () => {
    cy.request('POST', apiUrl, {
      title: 'Tâche testée par Cypress',
      status: 'en cours',
      task_date: '2026-03-17'
    }).then((response) => {
      // 201 signifie "Created" (Créé avec succès)
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
    });
  });

});