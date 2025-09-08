package Backend;
import java.util.Scanner;
import java.util.LinkedList;

enum videoGames {
    VALORANT, LEAGUEOFLEGENDS, FORTNITE, RAINBOWSIXSIEGE, MINECRAFT, AMONGUS, REPO
}

enum mode {
    CASUAL, COMPETITIVE
}

class ticket {
    videoGames game;
    int playersInLobby;
    int lobbySize;
    mode mode;
    String message;

    public ticket(videoGames game, int playersInLobby, int lobbySize, int mode, String message) {
        this.game = game;
        this.playersInLobby = playersInLobby;
        this.lobbySize = lobbySize;
        this.mode = mode;
        this.message = message;
    }
}

public class concept {
    public static void main(String[] args) {
        LinkedList<ticket> ticketList = new LinkedList<ticket>();
        ticket ticket;
        Scanner scnr = new Scanner(System.in);
        String game;
        int availPlayers, numWantedPlayers;
        
        System.out.println("Videogame?\n");
        game = scnr.nextLine();

        // How many players in party?
        System.out.println("Number of players in lobby?\n");
        availPlayers = Integer.parseInt(scnr.nextLine());

        // Size of lobby?
        System.out.println("Size of party\n");
        numWantedPlayers = scnr.nextInt();

        // Casual or competitve?
        System.out.println("Casual or competitive?\n");
        int mode = scnr.nextInt();

        // What message would you like to show?
        System.out.println("Enter message:\n");
        String message = scnr.nextLine();

        ticket = new ticket(videoGames.valueOf(game), availPlayers, numWantedPlayers, mode, message);



        scnr.close();
        
    }
}
